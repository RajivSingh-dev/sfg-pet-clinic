package guru.springframework.sfgpetclinic.controllers;

import guru.springframework.sfgpetclinic.model.Pet;
import guru.springframework.sfgpetclinic.model.PetType;
import guru.springframework.sfgpetclinic.services.OwnerService;
import guru.springframework.sfgpetclinic.services.PetService;
import guru.springframework.sfgpetclinic.services.PetTypeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
public class PetApiController {

   private final PetService petService;
   private final OwnerService ownerService;
   private final PetTypeService petTypeService;

    public PetApiController(PetService petService, OwnerService ownerService, PetTypeService petTypeService) {
        this.petService = petService;
        this.ownerService = ownerService;
        this.petTypeService = petTypeService;
    }

    @ModelAttribute("types")
    public Set<PetType> populatePetTypes()
    {
      return petTypeService.findAll();
    }

    @ModelAttribute("owner")
    public Pet petById(@RequestParam  Long ownerId,@RequestParam Long petId)
    {
      return petService.findByPetIdAndOwnerId(petId,ownerId);
    }
    @PostMapping({"/submitPetData"})
    public Pet updatePetById(@RequestParam  Long ownerId, @RequestBody Pet pet)
    {
      return petService.updateByPetIdAndOwnerId(ownerId,pet);
    }


}
