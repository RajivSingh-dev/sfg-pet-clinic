package guru.springframework.sfgpetclinic.controllers;


import guru.springframework.sfgpetclinic.model.Owner;
import guru.springframework.sfgpetclinic.services.OwnerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
public class OwnerApiController {

    private final OwnerService ownerService;

    public OwnerApiController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }
    @GetMapping("/ownerdata")
    public Set<Owner> getOwnerData(@RequestParam String lastName)
    {
         if(!lastName.isEmpty()) {
            return ownerService.findAllByLastNameLike("%" + lastName + "%");
        }
        else
            return ownerService.findAll();

    }
    @GetMapping("/ownerById")
    public Owner getOwnerById(@RequestParam String ownerId)
    {
        Owner owner = ownerService.findById(Long.valueOf(ownerId));
        return owner;
    }

    @PostMapping({"/owners/new","/owners/update"})
    public String createOrUpdateOwner(@RequestBody Owner owner,@RequestParam(required = false) String ownerId)
    {
        if(ownerId!=null)
           owner.setId(Long.valueOf(ownerId));
      Owner result =  ownerService.save(owner);
      return result.getId().toString();
    }



}
