package guru.springframework.sfgpetclinic.services.springdatajpa;

import guru.springframework.sfgpetclinic.model.Pet;
import guru.springframework.sfgpetclinic.repositories.PetReopistory;
import guru.springframework.sfgpetclinic.services.PetService;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@Profile("springdatajpa")
public class PetSDJpaService implements PetService {

    private final PetReopistory petReopistory;

    public PetSDJpaService(PetReopistory petReopistory) {
        this.petReopistory = petReopistory;
    }

    @Override
    public Set<Pet> findAll() {
        Set<Pet> petSet = new HashSet<>();
        petReopistory.findAll().forEach(petSet::add);
        return petSet;
    }

    @Override
    public Pet findById(Long aLong) {
        return petReopistory.findById(aLong).orElse(null);
    }

    @Override
    public Pet save(Pet object) {
        return petReopistory.save(object);
    }

    @Override
    public void delete(Pet object) {
        petReopistory.save(object);
    }

    @Override
    public void deleteById(Long aLong) {
       petReopistory.deleteById(aLong);
    }
}
